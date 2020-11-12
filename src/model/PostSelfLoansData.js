

import ApiClient from '../ApiClient';

/**
 * The PostSelfLoansData model module.
 * @module model/PostSelfLoansData
 * @version 1.0
 */
class PostSelfLoansData {
    /**
     * Constructs a new <code>PostSelfLoansData</code>.
     * @alias module:model/PostSelfLoansData
     */
    constructor() { 
        
        PostSelfLoansData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansData} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansData} The populated <code>PostSelfLoansData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansData();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('Activation_Date')) {
                obj['Activation_Date'] = ApiClient.convertToType(data['Activation_Date'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostSelfLoansData.prototype['locale'] = undefined;

/**
 * @member {String} Activation_Date
 */
PostSelfLoansData.prototype['Activation_Date'] = undefined;

/**
 * @member {String} dateFormat
 */
PostSelfLoansData.prototype['dateFormat'] = undefined;






export default PostSelfLoansData;

