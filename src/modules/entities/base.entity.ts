import {
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

export abstract class Base {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@CreateDateColumn({ name: 'createdat' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updatedat' })
	updatedAt: Date;
}
