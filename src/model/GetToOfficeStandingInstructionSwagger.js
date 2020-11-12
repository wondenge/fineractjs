

import ApiClient from '../ApiClient';

/**
 * The GetToOfficeStandingInstructionSwagger model module.
 * @module model/GetToOfficeStandingInstructionSwagger
 * @version 1.0
 */
class GetToOfficeStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetToOfficeStandingInstructionSwagger</code>.
     * @alias module:model/GetToOfficeStandingInstructionSwagger
     */
    constructor() { 
        
        GetToOfficeStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetToOfficeStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetToOfficeStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetToOfficeStandingInstructionSwagger} The populated <code>GetToOfficeStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetToOfficeStandingInstructionSwagger();

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
GetToOfficeStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetToOfficeStandingInstructionSwagger.prototype['name'] = undefined;






export default GetToOfficeStandingInstructionSwagger;

