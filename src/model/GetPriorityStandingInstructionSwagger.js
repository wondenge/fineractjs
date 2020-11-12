

import ApiClient from '../ApiClient';

/**
 * The GetPriorityStandingInstructionSwagger model module.
 * @module model/GetPriorityStandingInstructionSwagger
 * @version 1.0
 */
class GetPriorityStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetPriorityStandingInstructionSwagger</code>.
     * @alias module:model/GetPriorityStandingInstructionSwagger
     */
    constructor() { 
        
        GetPriorityStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPriorityStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPriorityStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetPriorityStandingInstructionSwagger} The populated <code>GetPriorityStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPriorityStandingInstructionSwagger();

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
GetPriorityStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetPriorityStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetPriorityStandingInstructionSwagger.prototype['description'] = undefined;






export default GetPriorityStandingInstructionSwagger;

