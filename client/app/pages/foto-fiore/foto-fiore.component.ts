// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

// START - REQUIRED RESOURCES

// END - REQUIRED RESOURCES

/**
 * FotoFiore Component
 */
@Component({
    selector: 'foto-fiore',
    templateUrl : './foto-fiore.component.html',
    styleUrls: ['./foto-fiore.component.css']
})

export class FotoFioreComponent {
    
    constructor(
        private location: Location) { 
        
    }
}