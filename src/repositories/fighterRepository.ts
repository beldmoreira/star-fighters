import { connection } from "../config/database.js";

export async function findFighter() {
  const result = await connection.query(`
    SELECT * 
    FROM fighters
    ORDER BY wins DESC, draws DESC;
    `);
  return result.rows;
}

export async function findFighterByUsername(username: string) {
  const result = await connection.query(
    `
  SELECT *
  FROM fighters
  WHERE username = $1
  `,
    [username]
  );
}
