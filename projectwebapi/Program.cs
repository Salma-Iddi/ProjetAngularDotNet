using projectwebapi.Data;
using projectwebapi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDBContext>(options=>{
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddIdentity<User.IdentityRole>()
.AddIdentityFrameworkStores<ApplicationDBContext>
.AddDefaultTokenProviders();


// builder.Services.AddAuthentication(options =>
// {
//     options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//     options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
// })
// .AddJwtBearer(options =>
// {
//     options.SaveToken = true;
//     options.RequireHttpsMetadata = false; // Consider security implications!
//     // Configure token validation (issuer, signing credentials, etc.)
//     options.TokenValidationParameters = new TokenValidationParameters
//     {
//         ValidateIssuerSigningKey = true, // Set to true for security
//         IssuerSigningKey = GetSigningKey(), // Replace with secure key retrieval
//         ValidateIssuer = true, // Set to true if issuer validation is needed
//         ValidIssuer = "your_issuer_address", // Replace with your issuer address
//         ValidateAudience = true, // Set to true if audience validation is needed
//         ValidAudience = "your_valid_audience", // Replace with your intended audience
//         ValidateLifetime = true // Set to true for security
//     };
// });
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();