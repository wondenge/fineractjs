

import ApiClient from '../ApiClient';

/**
 * The GetFromOfficeStandingInstructionSwagger model module.
 * @module model/GetFromOfficeStandingInstructionSwagger
 * @version 1.0
 */
class GetFromOfficeStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromOfficeStandingInstructionSwagger</code>.
     * @alias module:model/GetFromOfficeStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromOfficeStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromOfficeStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromOfficeStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromOfficeStandingInstructionSwagger} The populated <code>GetFromOfficeStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromOfficeStandingInstructionSwagger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFromOfficeStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFromOfficeStandingInstructionSwagger.prototype['name'] = undefined;






export default GetFromOfficeStandingInstructionSwagger;

