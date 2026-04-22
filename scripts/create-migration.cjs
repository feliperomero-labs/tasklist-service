const fs = require('fs');
const path = require('path');

const rawName = process.env.npm_config_name;

if (!rawName) {
  console.error('Usage: npm run db:migrate:create -- --name=descriptive-migration-name');
  process.exit(1);
}

const migrationName = rawName
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

if (!migrationName) {
  console.error('Invalid migration name. Use letters and numbers.');
  process.exit(1);
}

const now = new Date();
const timestamp = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, '0'),
  String(now.getDate()).padStart(2, '0'),
  String(now.getHours()).padStart(2, '0'),
  String(now.getMinutes()).padStart(2, '0'),
  String(now.getSeconds()).padStart(2, '0'),
].join('');

const migrationsDir = path.resolve(
  __dirname,
  '../src/modules/task/infrastructure/database/sequelize/migrations',
);
const fileName = `${timestamp}-${migrationName}.ts`;
const filePath = path.join(migrationsDir, fileName);

const template = `import { QueryInterface } from 'sequelize';

module.exports = {
  async up(_queryInterface: QueryInterface) {
    // TODO: implement migration changes.
  },

  async down(_queryInterface: QueryInterface) {
    // TODO: rollback migration changes.
  },
};
`;

fs.mkdirSync(migrationsDir, { recursive: true });
fs.writeFileSync(filePath, template, { encoding: 'utf8', flag: 'wx' });

console.log(`Migration created: ${fileName}`);
