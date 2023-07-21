"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeMinimal } from "@supabase/auth-ui-shared";
import Link from "next/link";
export default function Signup() {
	const supabase = createClientComponentClient();

	return (
		<>
			<div className="flex flex-1 items-center justify-center bg-neutral md:bg-transparent">
				<div className="card bg-neutral md:shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Forgot Password</h2>
						<Auth
							supabaseClient={supabase}
							view="forgotten_password"
							appearance={{
								theme: ThemeMinimal,
								extend: false,
								className: {
									input: "input w-full",
									button: "btn w-full btn-primary",
									label: "label",
									container: "flex flex-col gap-4",
									message: "text-error"
								}
							}}
							theme="dark"
							showLinks={false}
							providers={[]}
							redirectTo={`${location.origin}/auth/callback`}
						/>
						<Link
							className="link"
							href="/auth/login">
							Remembered it? Login.
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
