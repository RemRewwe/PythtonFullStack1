preco = 150.0
desconto = 20
preco_final = preco - (preco * desconto / 100)
print("Preço final após desconto:", preco_final)

peso = 70
altura = 1.75
imc = peso / (altura ** 2)
print("Seu IMC é:", imc)

idade = 22
tem_experiencia = True
elegivel = idade >= 18 and tem_experiencia
print("Elegível para o concurso?", elegivel)

nivel_acesso = 2
if nivel_acesso == 3:
    print("Acesso total")
elif nivel_acesso == 2:
    print("Acesso parcial")
else:
    print("Acesso restrito")

celsius = 35
fahrenheit = (celsius * 9/5) + 32
print("Temperatura em Fahrenheit:", fahrenheit)

numero = 7
if numero % 2 == 0:
    print("O número é par.")
else:
    print("O número é ímpar.")

peso = 8
if peso <= 5:
    frete = 10.0
elif peso <= 10:
    frete = 20.0
else:
    frete = 30.0
print("Valor do frete:", frete)