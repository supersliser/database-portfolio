'use client'
import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables, Enums } from "@/types/supabase";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export class project {
    id: number;
    name: string;
    created: Date;
    logoLink : string
    bgImageLink : string
    constructor(id: number, name: string, createdDate: Date, logo: string, bgImage: string) {
        this.id = id;
        this.name = name;
        this.created = createdDate;
        this.logoLink = logo;
        this.bgImageLink = bgImage;
    }
}