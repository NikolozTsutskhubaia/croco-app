import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton],
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.scss',
})
export class PostDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PostDialogComponent>
  ) {}
  close() {
    this.dialogRef.close();
  }
}
