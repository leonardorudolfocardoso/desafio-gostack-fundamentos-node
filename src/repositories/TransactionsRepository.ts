import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO DONE
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO DONE

    const sumReducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

    const income = this.transactions
    .map((transaction) => transaction.type === "income" ? transaction.value : 0)
    .reduce(sumReducer);

    const outcome = this.transactions
    .map((transaction) => transaction.type === "outcome" ? transaction.value : 0)
    .reduce(sumReducer);

    const total = income - outcome;

    return (
      {
        income,
        outcome,
        total
      }
    );
  }

  public create({ title, value, type } : Omit<Transaction, 'id'>): Transaction {
    // TODO DONE

    const newTransaction: Transaction = new Transaction({ title, value, type });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
