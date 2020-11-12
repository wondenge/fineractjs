

import ApiClient from '../ApiClient';

/**
 * The GetInstructionTypeStandingInstructionSwagger model module.
 * @module model/GetInstructionTypeStandingInstructionSwagger
 * @version 1.0
 */
class GetInstructionTypeStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetInstructionTypeStandingInstructionSwagger</code>.
     * @alias module:model/GetInstructionTypeStandingInstructionSwagger
     */
    constructor() { 
        
        GetInstructionTypeStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInstructionTypeStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInstructionTypeStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetInstructionTypeStandingInstructionSwagger} The populated <code>GetInstructionTypeStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInstructionTypeStandingInstructionSwagger();

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
GetInstructionTypeStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetInstructionTypeStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetInstructionTypeStandingInstructionSwagger.prototype['description'] = undefined;






export default GetInstructionTypeStandingInstructionSwagger;

