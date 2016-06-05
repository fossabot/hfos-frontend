/*
 * Hackerfleet Operating System
 * =====================================================================
 * Copyright (C) 2011-2016 riot <riot@hackerfleet.org> and others.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

class LoginComponent {

    constructor(userservice) {
        this.user = userservice;
        this.username = '';
        this.password = '';
    }

    close() {
        this.user.logincancel();
    }

    logout() {
        this.user.logout();
    }

    showprofile() {
        this.user.showprofile();
    }

    login() {
        console.log('Trying to login: ', this.username, this.password, this);
        this.user.login(this.username, this.password);
    }
}

LoginComponent.$inject = ['user'];

export default LoginComponent;