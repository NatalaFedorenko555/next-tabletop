"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";
import { NextResponse } from "next/server";



export default async function deleteTodo(id: number) {
    // Здесь будет логика удаления дела с указанным id
const  deletedTodo =await db
.delete(todos)
.where(eq(todos.id, id))
.returning();
if(!deletedTodo) return NextResponse.json({error: 'Todo not found'});
 // revalidatePath("/todos");
  updateTag("todos");
}