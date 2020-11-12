

import ApiClient from '../ApiClient';

/**
 * The GetToAccountTypeStandingInstructionSwagger model module.
 * @module model/GetToAccountTypeStandingInstructionSwagger
 * @version 1.0
 */
class GetToAccountTypeStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetToAccountTypeStandingInstructionSwagger</code>.
     * @alias module:model/GetToAccountTypeStandingInstructionSwagger
     */
    constructor() { 
        
        GetToAccountTypeStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetToAccountTypeStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetToAccountTypeStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetToAccountTypeStandingInstructionSwagger} The populated <code>GetToAccountTypeStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetToAccountTypeStandingInstructionSwagger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetToAccountTypeStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetToAccountTypeStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetToAccountTypeStandingInstructionSwagger.prototype['description'] = undefined;






export default GetToAccountTypeStandingInstructionSwagger;

