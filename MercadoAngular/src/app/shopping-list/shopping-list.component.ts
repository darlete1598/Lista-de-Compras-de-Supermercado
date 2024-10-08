export class ShoppingListComponent {
  newItem: string = '';
  items: { name: string, purchased: boolean }[] = [];

  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ name: this.newItem, purchased: false });
      this.newItem = '';
    }
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  
}
