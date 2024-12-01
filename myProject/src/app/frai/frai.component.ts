import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-frai',
  standalone: true,
  imports: [FormsModule,CommonModule], 
  templateUrl: './frai.component.html',
  styleUrls: ['./frai.component.css']
})
export class FraiComponent {
  showAddExpenseForm = false;
  expenses: Expense[] = [
    { id: 1, date: '2023-11-15', category: 'Food', montant: 3000 },
    { id: 2, date: '2023-11-20', category: 'Transportation', montant: 500 },
    { id: 3, date: '2023-11-21', category: 'Groceries', montant: 1200 },
    { id: 4, date: '2023-11-22', category: 'Entertainment', montant: 200 },
  ];
  newExpenseDate = '';
  newExpenseCategory = '';
  newExpenseMontant = "";

  toggleAddExpenseForm() {
    this.showAddExpenseForm = !this.showAddExpenseForm;
  }
  

  addExpense(date: string, category: string, montant: string) {
    const newId = this.expenses.length + 1;
    this.expenses.push({ id: newId, date, category, montant: parseFloat(montant) }); 
    this.showAddExpenseForm = false;
  
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  }

  editExpense(expense: Expense) {
   
  }

  clearNewExpenseFields() {
    this.newExpenseDate = '';
    this.newExpenseCategory = '';
    this.newExpenseMontant = '';
  }
}

interface Expense {
  id: number;
  date: string;
  category: string;
  montant: number; 
}