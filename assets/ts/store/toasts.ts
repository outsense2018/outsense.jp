import Vue from 'vue';

export interface Toast {
  id?: string;
  title?: string;
  message: string;
  variant?: 'primary' | 'danger' | 'warning' | 'success' | 'info';
  delay?: number;
}
export type ToastWithId = Toast & { id: string };

export default new Vue({
  data() {
    return { toasts: [] as ToastWithId[] };
  },
  methods: {
    push(toast: Toast): string {
      const x: ToastWithId = Object.assign(toast, { id: this.nextId() });
      this.toasts.push(x);
      if (this.toasts.length > 100) {
        this.toasts.shift();
      }
      return x.id;
    },
    remove(id: string): void {
      this.toasts = this.toasts.filter(x => x.id !== id);
    },
    nextId(): string {
      let i = 0;
      while (this.toasts.some(t => t.id === `id-${i}`)) {
        ++i;
      }
      return `id-${i}`;
    },
  },
});
