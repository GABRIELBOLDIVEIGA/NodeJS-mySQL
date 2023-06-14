### Criar Tabela Pessoas

```json
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```

### Criar Tabela de Niveis

```json
npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
```

### Criar Tabela de Turmas

```json
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
```

### Criar Tabela de Matriculas

```json
npx sequelize-cli model:create --name Matriculas --attributes status:string
```

```json
npx sequelize-cli seed:generate --name demo-pessoas
```

```json
npx sequelize-cli seed:generate --name demo-niveis
```

```json
npx sequelize-cli seed:generate --name demo-turmas
```

```json
npx sequelize-cli seed:generate --name demo-matriculas
```

```json
npx sequelize-cli db:seed:all
```
