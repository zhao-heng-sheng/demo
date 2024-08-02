import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DbService } from 'src/db/db.service';
import { Book } from './entities/book.entity';
function randomNum() {
  return Math.floor(Math.random() * 1000000);
}
@Injectable()
export class BookService {
  @Inject()
  private readonly dbService: DbService;
  async list() {
    let books: Book[] = await this.dbService.read();
    return books;
  }
  async findById(id: number) {
    let book = await this.dbService.read();
    return book.find((book) => book.id === id);
  }
  async create(createBookDto: CreateBookDto) {
    let books: Book[] = await this.dbService.read();
    let book = new Book();
    book.id = randomNum();
    book.name = createBookDto.name;
    book.author = createBookDto.author;
    book.description = createBookDto.description;
    book.cover = createBookDto.cover;
    books.push(book);
    await this.dbService.write(books);
    return book;
  }
  async update(updateBookDto: UpdateBookDto) {
    const books: Book[] = await this.dbService.read();
    const foundBook = books.find((book) => book.id === updateBookDto.id);
    if (!foundBook) {
      return '未找到该书';
    }
    foundBook.name = updateBookDto.name;
    foundBook.author = updateBookDto.author;
    foundBook.description = updateBookDto.description;
    foundBook.cover = updateBookDto.cover;
    await this.dbService.write(books);
    return foundBook;
  }
  async delete(id: number) {
    const books: Book[] = await this.dbService.read();
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
      return '未找到该书';
    }
    books.splice(index, 1);
    await this.dbService.write(books);
    return '删除成功';
  }
}
