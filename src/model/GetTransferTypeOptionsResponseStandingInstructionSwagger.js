

import ApiClient from '../ApiClient';

/**
 * The GetTransferTypeOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetTransferTypeOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetTransferTypeOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetTransferTypeOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetTransferTypeOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetTransferTypeOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTransferTypeOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransferTypeOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetTransferTypeOptionsResponseStandingInstructionSwagger} The populated <code>GetTransferTypeOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransferTypeOptionsResponseStandingInstructionSwagger();

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
GetTransferTypeOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetTransferTypeOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetTransferTypeOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetTransferTypeOptionsResponseStandingInstructionSwagger;

