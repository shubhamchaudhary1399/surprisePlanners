import { Role } from 'src/modules/auth/role.enum';
import { Entity, Column } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'user' })
export class User extends Base {
	@Column({ name: 'fullname' })
	fullName: string;

	@Column({ name: 'mobilenumber', unique: true })
	mobileNumber: string;

	@Column({ name: 'email', unique: true })
	email: string;

	@Column({ name: 'password' })
  password: string;

	@Column({ type: 'enum', enum: Role, default: Role.User })
  roles: Role;
}
