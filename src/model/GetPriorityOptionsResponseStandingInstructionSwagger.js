

import ApiClient from '../ApiClient';

/**
 * The GetPriorityOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetPriorityOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetPriorityOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetPriorityOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetPriorityOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetPriorityOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPriorityOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPriorityOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetPriorityOptionsResponseStandingInstructionSwagger} The populated <code>GetPriorityOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPriorityOptionsResponseStandingInstructionSwagger();

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
GetPriorityOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetPriorityOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetPriorityOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetPriorityOptionsResponseStandingInstructionSwagger;

