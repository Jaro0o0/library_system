using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace library_api.Migrations
{
    /// <inheritdoc />
    public partial class AddIsRentedToBooks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsRented",
                table: "books",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 1,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 2,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 3,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 4,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 5,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 6,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 7,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 8,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 9,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 10,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 11,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 12,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 13,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 14,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 15,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 16,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 17,
                column: "IsRented",
                value: false);

            migrationBuilder.UpdateData(
                table: "books",
                keyColumn: "id",
                keyValue: 18,
                column: "IsRented",
                value: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRented",
                table: "books");
        }
    }
}
