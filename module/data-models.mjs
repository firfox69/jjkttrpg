///<reference path="C:\Program Files\Foundry Virtual Tabletop\resources\app\public\scripts\foundry.mjs"/>

const {
   SchemaField, NumberField, StringField, EmbeddedDataField, ArrayField
} = foundry.data.fields;

/** Character Models */

class CharacterData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            health: new SchemaField({
                value: new NumberField({integer: true, required: true, min: 0}),
                min: new NumberField({integer: true, required: true, min: 0, initial: 0, readonly: true}),
                max: new NumberField({integer: true, required: true, min: 0})
            }),
            cursedEnergy: new SchemaField({
                value: new NumberField({integer: true, required: true, min: 0}),
                min: new NumberField({integer: true, required: true, min: 0, initial: 0, readonly: true}),
                max: new NumberField({integer: true, required: true, min: 0})
            }),
            armorClass: new NumberField({integer: true, required: true, min: 0}),
            speed: new NumberField({integer: true, required: true, min: 0, step: 5}),
            stats: new SchemaField({
                power: new NumberField({integer: true, required: true, min: 0}),
                speed: new NumberField({integer: true, required: true, min: 0}),
                technique: new NumberField({integer: true, required: true, min: 0}),
                intelligence: new NumberField({integer: true, required: true, min: 0}),
                cooperation: new NumberField({integer: true, required: true, min: 0}),
            }),
            grade: new StringField({blank: true, choices: ["special","semi-special","1","semi-1","2","semi-2","3","semi-3","4"], initial: "4"})
        }
    }
}

function substatField() {
    return {
        aptitude: new StringField({required: true, blank: false, choices: ["trained","permanent","none"], initial: "none"}),
        bonus: new NumberField({integer: true, initial: 0})
    }
}
export class SorcererData extends CharacterData {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            substats: new SchemaField({
                power: new SchemaField({
                    combat: substatField(),
                    strength: substatField(),
                    fortitude: substatField(),
                    intimidation: substatField(),
                    athletics: substatField()
                }),
                speed: new SchemaField({
                    reflexes: substatField(),
                    tempo: substatField(),
                    stealth: substatField(),
                    precision: substatField()
                }),
                technique: new SchemaField({
                    control: substatField(),
                    survival: substatField(),
                    acrobatics: substatField(),
                    talent: substatField()
                }),
                intelligence: new SchemaField({
                    perception: substatField(),
                    generalEd: substatField(),
                    cursedEd: substatField(),
                    techEd: substatField(),
                    medicalEd: substatField()
                }),
                cooperation: new SchemaField({
                    combo: substatField(),
                    charisma: substatField(),
                    persuasion: substatField(),
                    insight: substatField(),
                    deception: substatField()
                })
            }),
            xp: new SchemaField({
                value: new NumberField({integer: true, required: true, min: 0}),
                min: new NumberField({integer: true, required: true, min: 0, initial: 0, readonly: true}),
                max: new NumberField({integer: true, required: true, min: 0})
            }),
            inventory: new ArrayField(new EmbeddedDataField(ItemData)),
            equipped: new SchemaField({
                head: new EmbeddedDataField(ItemData),
                body: new EmbeddedDataField(ItemData),
                handL: new EmbeddedDataField(ItemData),
                handR: new EmbeddedDataField(ItemData),
                back: new EmbeddedDataField(ItemData),
                legs: new EmbeddedDataField(ItemData)
            }),
            xpAbilities: new ArrayField(new EmbeddedDataField(XpAbility)),
            jujutsuSkills: new ArrayField(new EmbeddedDataField(JujutsuSkill)),
            learning: new ArrayField(new EmbeddedDataField(JujutsuSkill))
        }
    }
}

/** Item Models */

class ItemData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {

        }
    }
}

class XpAbility extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {

        }
    }
}

class JujutsuSkill extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {

        }
    }
}