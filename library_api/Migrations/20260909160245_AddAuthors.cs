using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace library_api.Migrations
{
    /// <inheritdoc />
    public partial class AddAuthors : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AuthorId",
                table: "books",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserFavoriteAuthors",
                columns: table => new
                {
                    FavoriteAuthorsId = table.Column<int>(type: "integer", nullable: false),
                    UsersId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFavoriteAuthors", x => new { x.FavoriteAuthorsId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_UserFavoriteAuthors_Authors_FavoriteAuthorsId",
                        column: x => x.FavoriteAuthorsId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserFavoriteAuthors_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 1,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 2,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 3,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 4,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 5,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 6,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 7,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 8,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 9,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 10,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 11,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 12,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 13,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 14,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 15,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 16,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 17,
                column: "AuthorId",
                value: null);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 18,
                column: "AuthorId",
                value: null);

            migrationBuilder.CreateIndex(
                name: "IX_books_AuthorId",
                table: "books",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Authors_Name",
                table: "Authors",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserFavoriteAuthors_UsersId",
                table: "UserFavoriteAuthors",
                column: "UsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_books_Authors_AuthorId",
                table: "books",
                column: "AuthorId",
                principalTable: "Authors",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_books_Authors_AuthorId",
                table: "books");

            migrationBuilder.DropTable(
                name: "UserFavoriteAuthors");

            migrationBuilder.DropTable(
                name: "Authors");

            migrationBuilder.DropIndex(
                name: "IX_books_AuthorId",
                table: "books");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "books");
        }
    }
}
