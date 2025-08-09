import { inject, Injectable, Injector, signal } from '@angular/core';
import { collection, collectionData, Firestore, getFirestore } from '@angular/fire/firestore';
import { error } from 'console';
import { finalize, Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface SliderItem {
  id: string;
  imageUrl: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {
  firestore = inject(Firestore)
  private injector = inject(Injector);
  private destroy$ = new Subject<void>();


  getAllProjectsLoading = signal(false);
  getAllProjectsData = signal<SliderItem[] | null>(null);

  getAllProjetcs() {
    var ref = collection(this.firestore, 'projects');
    return collectionData(ref, { idField: 'id' })
  }
  // getAllProjetcs() {
  //   if (this.getAllProjectsData() || this.getAllProjectsLoading()) {
  //     return;
  //   }
  //   var ref = collection(this.firestore, 'projects');

  //   this.getAllProjectsLoading.set(true);
  //   collectionData(ref,{idField: 'id'})
  //   .pipe(
  //     finalize(()=> this.getAllProjectsLoading.set(false))
  //   )
  //   .subscribe({
  //     next:((data)=>{
  //       console.log(data)
  //       this.getAllProjectsData.set(data as SliderItem[]);
  //     }),
  //     error:(error) => {
  //       console.error('Error fetching projects:', error);
  //       this.getAllProjectsLoading.set(false);
  //     }
  //   })

  // }
  
}
