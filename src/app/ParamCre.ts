export class paramcre {
    id!: number ; // Assign a default value to the 'id' property
    codeDomaine: string = '';
    codeApplication: string = '';
    codeEvenement: string = '';
    codeStructure: string = '';
    codeEmetteur: string = '';
    aEnrichir: string = '';
    aComptabiliser: string = '';
    dateMiseProd: Date | null = null;
    etatInitial: string = '';
    topAggraCdc: string = '';
    valAggraCdc: string = '';
    dateMajAggraCdc: Date | null = null;
    topAggraCtx: string = '';
    valAggraCtx: string = '';
    dateMajAggraCtx: Date | null = null;
    rib: string = '';
    dateDerPassage!: Date ;
    ligneValide!: string;
    ligneRejete!: string ;
    compteurEven!: string ;
    topAggraPrec: string = '';
    valAggraPrec: string = '';
    dateMajAggraPrec: Date | null = null;
    topDesac!: string;
    dateDesac!: Date;
  
    constructor() {
      // Optional: You can initialize properties in the constructor if needed
      // For example, you can set a default value for dateMiseProd:
      // this.dateMiseProd = new Date();
    }
  }
  