import { Component, OnInit } from '@angular/core';
import { Route } from '../route';
import { RouteService } from '../route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {
  routes: Route[] = []; // Başlangıçta boş bir dizi
  loadingRoute: boolean = false; // Rota yüklenirken bekleme durumu

  constructor(private routeService: RouteService, private router: Router) {}

  ngOnInit(): void {
    this.getRoutes();
  }

  private getRoutes(): void {
    this.routeService.getRouteList().subscribe(data => {
      this.routes = data;
      this.sortRoutes(); // Rotaları sıralama işlemi
    });
  }

  private sortRoutes(): void {
    this.routes.sort((a, b) => {
      const codeA = a.source?.code || ''; // Eğer undefined ise boş string kullan
      const codeB = b.source?.code || ''; // Eğer undefined ise boş string kullan
      return codeA.localeCompare(codeB);
    });
  }
  

  updateRoute(id: number): void {
    this.router.navigate(['update-route', id]);
  }

  goToCreateRoute(): void {
    this.router.navigate(['/create-route']);
  }
  deleteRoute(id: number): void {
    this.routeService.deleteRoute(id).subscribe(data => {
      console.log(data);
      this.getRoutes();
    });
  }
}
