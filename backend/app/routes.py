from flask import Blueprint, request, jsonify, abort
from .models import db, Book

main_bp = Blueprint('main', __name__)

@main_bp.route('/api/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    return jsonify([{'id': book.id, 'title': book.title, 'reason': book.reason} for book in books])

@main_bp.route('/api/books', methods=['POST'])
def add_book():
    new_book = request.json
    book = Book(title=new_book['title'], reason=new_book['reason'])
    db.session.add(book)
    db.session.commit()
    return jsonify({'id': book.id, 'title': book.title, 'reason': book.reason}), 201

# Delete
@main_bp.route('/api/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    book = Book.query.get(book_id)
    if book is None:
        print(f'Book with id {book_id} not found')
        abort(404)
    db.session.delete(book)
    db.session.commit()
    print(f'Book with id {book_id} deleted')
    return '', 204