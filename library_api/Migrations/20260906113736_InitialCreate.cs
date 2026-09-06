using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace library_api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "books",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    tytul = table.Column<string>(type: "text", nullable: false),
                    autor = table.Column<string>(type: "text", nullable: false),
                    gatunek = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_books", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserName = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    PasswordHash = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    CreatedAtUtc = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

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
                columns: new[] { "id", "autor", "gatunek", "tytul" },
                values: new object[,]
                {
                    { 1, "J.R.R. Tolkien", "fantasy", "The Hobbit" },
                    { 2, "J.R.R. Tolkien", "fantasy", "The Fellowship of the Ring" },
                    { 3, "J.K. Rowling", "fantasy", "Harry Potter and the Philosopher's Stone" },
                    { 4, "Frank Herbert", "science fiction", "Dune" },
                    { 5, "Isaac Asimov", "science fiction", "Foundation" },
                    { 6, "William Gibson", "science fiction", "Neuromancer" },
                    { 7, "Stephen King", "horror", "It" },
                    { 8, "Stephen King", "horror", "The Shining" },
                    { 9, "Bram Stoker", "horror", "Dracula" },
                    { 10, "Jane Austen", "romance", "Pride and Prejudice" },
                    { 11, "Nicholas Sparks", "romance", "The Notebook" },
                    { 12, "Jojo Moyes", "romance", "Me Before You" },
                    { 13, "Robert Louis Stevenson", "adventure", "Treasure Island" },
                    { 14, "Alexandre Dumas", "adventure", "The Three Musketeers" },
                    { 15, "Jules Verne", "adventure", "Around the World in Eighty Days" },
                    { 16, "Walter Isaacson", "biography", "Steve Jobs" },
                    { 17, "Walter Isaacson", "biography", "Einstein: His Life and Universe" },
                    { 18, "Nelson Mandela", "biography", "Long Walk to Freedom" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserName",
                table: "Users",
                column: "UserName",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "books");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
