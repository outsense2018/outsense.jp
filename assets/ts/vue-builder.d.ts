import Vue, { Component, AsyncComponent } from 'vue';
import { ExtendedVue } from 'vue/types/vue';
import { RecordPropsDefinition } from 'vue/types/options';
import { Context } from '@nuxt/types';
import { MetaInfo } from 'vue-meta';

// util
type Accessors<T> = {
  [K in keyof T]: () => T[K];
};

// builders
type Builder<V extends Vue> = PropsMethod<V> &
  HeadMethod<V, {}> &
  ComponentsMethod<V, {}> &
  DataMethods<V, {}> &
  PropertiesMethod<V, {}, {}> &
  LifeCyclesMethod<V, {}, {}, {}, {}> &
  BuildMethod<V, {}, {}, {}, {}>;

type PropsDefinedBuilder<V extends Vue, Props> = HeadMethod<V, Props> &
  ComponentsMethod<V, Props> &
  DataMethods<V, Props> &
  PropertiesMethod<V, {}, Props> &
  LifeCyclesMethod<V, {}, {}, {}, Props> &
  BuildMethod<V, {}, {}, {}, Props>;

type HeadDefinedBuilder<V extends Vue, Props> = ComponentsMethod<V, Props> &
  DataMethods<V, Props> &
  PropertiesMethod<V, {}, Props> &
  LifeCyclesMethod<V, {}, {}, {}, Props> &
  BuildMethod<V, {}, {}, {}, Props>;

type ComponentsDefinedBuilder<V extends Vue, Props> = DataMethods<V, Props> &
  PropertiesMethod<V, {}, Props> &
  LifeCyclesMethod<V, {}, {}, {}, Props> &
  BuildMethod<V, {}, {}, {}, Props>;

type DataDefinedBuilder<V extends Vue, Data, Props> = PropertiesMethod<V, Data, Props> &
  LifeCyclesMethod<V, Data, {}, {}, Props> &
  BuildMethod<V, Data, {}, {}, Props>;

type PropertyDefinedBuilder<V extends Vue, Data, Methods, Computed, Props> = LifeCyclesMethod<
  V,
  Data,
  Methods,
  Computed,
  Props
> &
  BuildMethod<V, Data, Methods, Computed, Props>;

type FinalBuilder<V extends Vue, Data, Methods, Computed, Props> = BuildMethod<
  V,
  Data,
  Methods,
  Computed,
  Props
>;

//methods
interface PropsMethod<V extends Vue> {
  withProps<Props>(props: RecordPropsDefinition<Props>): PropsDefinedBuilder<V, Props>;
}

type MetaGetFunc = (this: Vue) => MetaInfo;

interface HeadMethod<V extends Vue, Props> {
  withHead(meta: MetaInfo | MetaGetFunc): HeadDefinedBuilder<V, Props>;
}

interface ComponentsMethod<V extends Vue, Props> {
  withComponents(components: {
    [key: string]: Component<any, any, any, any> | AsyncComponent<any, any, any, any>;
  }): ComponentsDefinedBuilder<V, Props>;
}

interface DataMethods<V extends Vue, Props> {
  withData<Data = object, AsyncData = object>(options: {
    data?: (this: V & Props) => Data;
    asyncData?: (ctx: Context) => Promise<AsyncData>;
  }): DataDefinedBuilder<V, Data & AsyncData, Props>;
}

interface PropertiesMethod<V extends Vue, Data, Props> {
  withProperties<Methods, Computed>(
    options: {
      methods?: Methods;
      computed?: Accessors<Computed>;
    } & ThisType<V & Methods & Computed & Data & Readonly<Props>>
  ): PropertyDefinedBuilder<V, Data, Methods, Computed, Props>;
}

interface LifeCyclesMethod<V extends Vue, Data, Methods, Computed, Props> {
  withLifecycles(
    options: {
      beforeCreate?(this: V): void;
      created?(): void;
      beforeDestroy?(): void;
      destroyed?(): void;
      beforeMount?(): void;
      mounted?(): void;
      beforeUpdate?(): void;
      updated?(): void;
      activated?(): void;
      deactivated?(): void;
      errorCaptured?(err: Error, vm: Vue, info: string): boolean | void;
      serverPrefetch?(this: V): Promise<void>;
    } & ThisType<V & Methods & Computed & Data & Readonly<Props>>
  ): FinalBuilder<V, Data, Methods, Computed, Props>;
}

interface BuildMethod<V extends Vue, Data, Methods, Computed, Props> {
  build(): ExtendedVue<V, Data, Methods, Computed, Props>;
}

// export
declare const builder: () => Builder<Vue>;
export default builder;
