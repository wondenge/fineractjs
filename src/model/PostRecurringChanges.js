

import ApiClient from '../ApiClient';

/**
 * The PostRecurringChanges model module.
 * @module model/PostRecurringChanges
 * @version 1.0
 */
class PostRecurringChanges {
    /**
     * Constructs a new <code>PostRecurringChanges</code>.
     * @alias module:model/PostRecurringChanges
     */
    constructor() { 
        
        PostRecurringChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringChanges} obj Optional instance to populate.
     * @return {module:model/PostRecurringChanges} The populated <code>PostRecurringChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringChanges();

            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('checkNumber')) {
                obj['checkNumber'] = ApiClient.convertToType(data['checkNumber'], 'String');
            }
            if (data.hasOwnProperty('routingCode')) {
                obj['routingCode'] = ApiClient.convertToType(data['routingCode'], 'String');
            }
            if (data.hasOwnProperty('receiptNumber')) {
                obj['receiptNumber'] = ApiClient.convertToType(data['receiptNumber'], 'String');
            }
            if (data.hasOwnProperty('bankNumber')) {
                obj['bankNumber'] = ApiClient.convertToType(data['bankNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} accountNumber
 */
PostRecurringChanges.prototype['accountNumber'] = undefined;

/**
 * @member {String} checkNumber
 */
PostRecurringChanges.prototype['checkNumber'] = undefined;

/**
 * @member {String} routingCode
 */
PostRecurringChanges.prototype['routingCode'] = undefined;

/**
 * @member {String} receiptNumber
 */
PostRecurringChanges.prototype['receiptNumber'] = undefined;

/**
 * @member {String} bankNumber
 */
PostRecurringChanges.prototype['bankNumber'] = undefined;






export default PostRecurringChanges;

