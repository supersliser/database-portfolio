export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      projectPageTextData: {
        Row: {
          continuous: boolean
          image: string | null
          iscaption: boolean
          istitle: boolean
          linkdestination: string | null
          linkplaceholder: string | null
          ordering: number
          projectid: number
          text: string | null
          textaboveimage: boolean
        }
        Insert: {
          continuous?: boolean
          image?: string | null
          iscaption?: boolean
          istitle?: boolean
          linkdestination?: string | null
          linkplaceholder?: string | null
          ordering?: number
          projectid: number
          text?: string | null
          textaboveimage?: boolean
        }
        Update: {
          continuous?: boolean
          image?: string | null
          iscaption?: boolean
          istitle?: boolean
          linkdestination?: string | null
          linkplaceholder?: string | null
          ordering?: number
          projectid?: number
          text?: string | null
          textaboveimage?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "projectPageTextData_projectid_fkey"
            columns: ["projectid"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          bgimage: string | null
          bgImageLink: string
          bgimagename: string | null
          created: string
          id: number
          logoLink: string
          logoname: string | null
          title: string
        }
        Insert: {
          bgimage?: string | null
          bgImageLink?: string
          bgimagename?: string | null
          created: string
          id?: number
          logoLink?: string
          logoname?: string | null
          title: string
        }
        Update: {
          bgimage?: string | null
          bgImageLink?: string
          bgimagename?: string | null
          created?: string
          id?: number
          logoLink?: string
          logoname?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_bgimage_fkey"
            columns: ["bgimage"]
            isOneToOne: false
            referencedRelation: "objects"
            referencedColumns: ["id"]
          },
        ]
      }
      projecttags: {
        Row: {
          projectid: number
          tagid: number
        }
        Insert: {
          projectid: number
          tagid: number
        }
        Update: {
          projectid?: number
          tagid?: number
        }
        Relationships: [
          {
            foreignKeyName: "projecttags_projectid_fkey"
            columns: ["projectid"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projecttags_tagid_fkey"
            columns: ["tagid"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
