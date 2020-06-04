// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

// START - REQUIRED RESOURCES

// END - REQUIRED RESOURCES

/**
 * FotoFioreEdit Component
 */
@Component({
    selector: 'foto-fiore-edit',
    templateUrl : './foto-fiore-edit.component.html',
    styleUrls: ['./foto-fiore-edit.component.css']
})

export class FotoFioreEditComponent {
    
    constructor(
        private location: Location) { 
        
    }
}