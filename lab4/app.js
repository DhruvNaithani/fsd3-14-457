import http from 'http';
import { getAllteams, getTeamId, addTeam, updateTeambyId, deleteTeam } from "./teams.js";
import {parse as parseUrl} from "url";

const sendJson = (res, statusCode, data,keyword,msg) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(data === undefined ? "" : JSON.stringify(data));
};
const parseRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
        req.on("error", (err) => reject(err));
    });
};

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    // GET /teams -> Get all teams
    if (url === "/teams" && method === "GET") {
        return sendJson(res, 200, getAllteams());
    }

    // GET /teams/:id -> Get team by ID
    if (url.startsWith("/teams/") && method === "GET") {
        const id = parseInt(url.split("/")[2]);
        const team = getteamId(id);
        if (!team) return sendJson(res, 404, { message: "Team not found" });
        return sendJson(res, 200, team);
    }

    // POST /teams -> Add new team
    if (url === "/teams" && method === "POST") {
        try {
            const body = await parseRequestBody(req);
            const newTeam = addTeam(body);
            return sendJson(res, 201, newTeam);
        } catch (err) {
            return sendJson(res, 400, { message: "Invalid JSON format" });
        }
    }
    // Route not found
    sendJson(res, 404, { message: "Route not found" });
});

server.listen(5000, () => {
    console.log("Server listening on http://localhost:5000");
});