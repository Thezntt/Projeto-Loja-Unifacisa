import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);

  // Signals: o Angular 21 é zoneless, então o template só atualiza quando um signal muda
  products = signal<Product[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading.set(true);
    this.error.set('');
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products.set(res.products);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Não foi possível carregar os produtos.');
        this.loading.set(false);
      },
    });
  }

  deleteProduct(id: number | undefined) {
    if (id === undefined) return;
    if (confirm('Tem certeza que deseja apagar?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products.update((list) => list.filter((p) => p.id !== id));
          alert('Produto apagado com sucesso!');
        },
        error: () => alert('Erro ao apagar o produto.'),
      });
    }
  }
}
