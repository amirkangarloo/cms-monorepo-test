import { Customer } from "src/lib/domain/entities/customer.entity";

export interface ICustomerRepository {
    create(name: string, email: string, address: string): Promise<Customer>;
    findById(id: string): Promise<Customer>;
    findAll(): Promise<Customer[]>;
}