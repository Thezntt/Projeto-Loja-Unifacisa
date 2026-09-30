import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    description: ['', Validators.required]
  });

  isEdit = false;
  productId!: number;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.productId = Number(id);
      this.productService.getProductById(this.productId).subscribe((product: any) => {
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.isEdit) {
        this.productService.updateProduct(this.productId, this.productForm.getRawValue() as Product)
          .subscribe(() => {
            alert('Produto atualizado!');
            this.router.navigate(['/']);
          });
      } else {
        this.productService.createProduct(this.productForm.getRawValue() as Product)
          .subscribe(() => {
            alert('Produto criado!');
            this.router.navigate(['/']);
          });
      }
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}