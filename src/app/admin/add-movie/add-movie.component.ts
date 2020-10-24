import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MoviesService } from "src/app/core/services/movies.service";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"],
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  imagePreview: string | ArrayBuffer = "";
  constructor(private movieService: MoviesService) {
    this.form = new FormGroup({
      tenPhim: new FormControl(""),
      biDanh: new FormControl(""),
      trailer: new FormControl(""),
      hinhAnh: new FormControl(""),
      moTa: new FormControl(""),
      ngayKhoiChieu: new FormControl(""),
    });
  }
  handleChangeFile(event) {
    const file = event.target.files[0];
    console.log(event.target.value);
    console.log(event.target.files);

    this.form.patchValue({ hinhAnh: event.target.files[0] });
    if (!file) return;

    //Biến đối tượng File thành base64=>có thể gắn vào tag img

    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);

    fileReader.onloadend = e => {
      this.imagePreview = e.target.result;
      console.log(e.target.result);
    };
  }
  handleAddMovie() {
    console.log(this.form.value);
    this.movieService.addMovie(this.form.value).subscribe();
  }

  ngOnInit(): void {}
}
