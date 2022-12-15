import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://kmuvzhvnmhnaxllzcznm.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttdXZ6aHZubWhuYXhsbHpjem5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwNTgyODQsImV4cCI6MTk4NjYzNDI4NH0.OZ9sklMgxnMEeuVivyPKjZoaAHFOqe0aVBPf3ftXQ2E",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttdXZ6aHZubWhuYXhsbHpjem5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwNTgyODQsImV4cCI6MTk4NjYzNDI4NH0.OZ9sklMgxnMEeuVivyPKjZoaAHFOqe0aVBPf3ftXQ2E"
    }
})