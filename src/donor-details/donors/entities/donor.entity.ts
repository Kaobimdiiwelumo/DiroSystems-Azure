import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Donor {
@PrimaryGeneratedColumn()
id: number;
@Column()
firstName: string;
@Column()
lastName: string;
@Column()
email: string;
@Column({nullable: true})
dateOfBirth: Date;
@Column({nullable: true})
nationality: string
@Column({nullable: true})
address: string
}