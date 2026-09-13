using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace library_api.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_books_Authors_AuthorId",
                table: "books");

            migrationBuilder.DropForeignKey(
                name: "FK_UserFavoriteAuthors_Authors_FavoriteAuthorsId",
                table: "UserFavoriteAuthors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Authors",
                table: "Authors");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "books",
                keyColumn: "id",
                keyValue: 18);

            migrationBuilder.RenameTable(
                name: "Authors",
                newName: "Author");

            migrationBuilder.RenameIndex(
                name: "IX_Authors_Name",
                table: "Author",
                newName: "IX_Author_Name");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Author",
                table: "Author",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_books_Author_AuthorId",
                table: "books",
                column: "AuthorId",
                principalTable: "Author",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UserFavoriteAuthors_Author_FavoriteAuthorsId",
                table: "UserFavoriteAuthors",
                column: "FavoriteAuthorsId",
                principalTable: "Author",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_books_Author_AuthorId",
                table: "books");

            migrationBuilder.DropForeignKey(
                name: "FK_UserFavoriteAuthors_Author_FavoriteAuthorsId",
                table: "UserFavoriteAuthors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Author",
                table: "Author");

            migrationBuilder.RenameTable(
                name: "Author",
                newName: "Authors");

            migrationBuilder.RenameIndex(
                name: "IX_Author_Name",
                table: "Authors",
                newName: "IX_Authors_Name");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Authors",
                table: "Authors",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "fantasy" },
                    { 2, "science fiction" },
                    { 3, "horror" },
                    { 4, "romance" },
                    { 5, "adventure" },
                    { 6, "biography" }
                });

            migrationBuilder.InsertData(
                table: "books",
                columns: new[] { "id", "AuthorId", "EndDate", "ImageId", "IsRented", "StartDate", "autor", "gatunek", "tytul" },
                values: new object[,]
                {
                    { 1, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "J.R.R. Tolkien", "fantasy", "The Hobbit" },
                    { 2, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "J.R.R. Tolkien", "fantasy", "The Fellowship of the Ring" },
                    { 3, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "J.K. Rowling", "fantasy", "Harry Potter and the Philosopher's Stone" },
                    { 4, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Frank Herbert", "science fiction", "Dune" },
                    { 5, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Isaac Asimov", "science fiction", "Foundation" },
                    { 6, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "William Gibson", "science fiction", "Neuromancer" },
                    { 7, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Stephen King", "horror", "It" },
                    { 8, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Stephen King", "horror", "The Shining" },
                    { 9, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bram Stoker", "horror", "Dracula" },
                    { 10, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Jane Austen", "romance", "Pride and Prejudice" },
                    { 11, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Nicholas Sparks", "romance", "The Notebook" },
                    { 12, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Jojo Moyes", "romance", "Me Before You" },
                    { 13, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Robert Louis Stevenson", "adventure", "Treasure Island" },
                    { 14, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Alexandre Dumas", "adventure", "The Three Musketeers" },
                    { 15, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Jules Verne", "adventure", "Around the World in Eighty Days" },
                    { 16, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Walter Isaacson", "biography", "Steve Jobs" },
                    { 17, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Walter Isaacson", "biography", "Einstein: His Life and Universe" },
                    { 18, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Nelson Mandela", "biography", "Long Walk to Freedom" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_books_Authors_AuthorId",
                table: "books",
                column: "AuthorId",
                principalTable: "Authors",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UserFavoriteAuthors_Authors_FavoriteAuthorsId",
                table: "UserFavoriteAuthors",
                column: "FavoriteAuthorsId",
                principalTable: "Authors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
