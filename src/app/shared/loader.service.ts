import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoaderService {

    public toggleLoader() {
        if (document.getElementById('loader')) {
            let div = document.getElementById('loader') as HTMLElement;
            document.body.removeChild(div)
        } else {
            const div = document.createElement('div');
            div.setAttribute('id', 'loader');
            div.className = 'overlay d-flex justify-content-center align-items-center';
            const p = document.createElement('p');
            p.className = 'p-3 bg-white rounded';
            p.textContent = 'Loading data, please wait...';
            div.appendChild(p);
            document.body.appendChild(div);
        }
    }
}