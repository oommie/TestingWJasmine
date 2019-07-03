import {routes} from './app.routes';
import { UsersComponent } from './users/users.component';


describe('routes',()=>{
    it('should contain a rout for /users',()=>{
        expect(routes).toContain({path:'users',component : UsersComponent})
    });
})