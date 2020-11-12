

import ApiClient from '../ApiClient';

/**
 * The GetStatusOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetStatusOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetStatusOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetStatusOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetStatusOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetStatusOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStatusOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStatusOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetStatusOptionsResponseStandingInstructionSwagger} The populated <code>GetStatusOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStatusOptionsResponseStandingInstructionSwagger();

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
GetStatusOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetStatusOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetStatusOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetStatusOptionsResponseStandingInstructionSwagger;

