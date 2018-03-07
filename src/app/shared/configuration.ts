import { Injectable } from "@angular/core";

@Injectable()

export class Configuration {
    public Server = 'http://localhost:4200/';
    public ApiUrl = 'assets/data/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}