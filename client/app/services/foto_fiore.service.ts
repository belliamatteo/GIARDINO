// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { Foto_fioreBaseService } from "./base/foto_fiore.base.service";
import { Foto_fiore } from '../domain/giardino_db/foto_fiore';

/**
 * YOU CAN OVERRIDE HERE foto_fioreBaseService
 */

@Injectable()
export class Foto_fioreService extends Foto_fioreBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}