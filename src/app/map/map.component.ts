import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  MAX_TILES_AMOUNT: number = 16;
  TILE_DIMENSION: number = 16;

  draw_rects_callback(ctx: CanvasRenderingContext2D): void {
    console.log('called callback')
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = "green"
    console.log(this)
    console.log(ctx)
    for (var x: number = 0; x < this.MAX_TILES_AMOUNT; x++) {
      for (var y: number = 0; y < this.MAX_TILES_AMOUNT; y++) {
        if (x == 2 || y == 4) continue
        var x_pos = x*this.TILE_DIMENSION
        var y_pos = y*this.TILE_DIMENSION
        ctx.fillRect(x_pos,y_pos, this.TILE_DIMENSION, this.TILE_DIMENSION)
        }
      }
  }

  ngOnInit(): void {
    var map: HTMLCanvasElement = document.getElementById("map-canvas") as HTMLCanvasElement
    var ctx = map.getContext("2d") as CanvasRenderingContext2D
    this.draw_rects_callback(ctx)
  }
}
