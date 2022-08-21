export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string,
            private escapar: boolean = false) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(modelo: T): string;

    public update(modelo: T): void {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

}