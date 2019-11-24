export class WindowEventReactive {
  private onInit: boolean = true;
  private actualSize: string = '';

  public onWindowResize(onResize: Function): void {
    if (this.onInit) {
      const windowSize = window.outerWidth;
      this.actualSize = this.getWindowSize(windowSize);
      onResize(this.actualSize, windowSize);
      this.onInit = false;
    }

    this.onResize((windowSize: number) => {
      const finalSize = this.getWindowSize(windowSize);
      if (this.actualSize !== finalSize) {
        this.actualSize = finalSize;
        onResize(finalSize, windowSize);
      }
    });
  }

  private onResize(onResize: Function): void {
    window.onresize = function(event: any) {
      const windowSize = event.currentTarget.outerWidth;
      onResize(windowSize);
    };
  }

  private getWindowSize(windowSize: number): string {
    let out = '';
    
    if (windowSize < 576) {
      out = 'xs';
    }

    if (windowSize >= 576) {
      out = 'sm';
    }

    if (windowSize >= 768) {
      out = 'md';
    }

    if (windowSize >= 992) {
      out = 'lg';
    }

    if (windowSize >= 1200) {
      out = 'xl';
    }

    return out;
  }
}